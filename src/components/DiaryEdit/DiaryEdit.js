import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";
import "./DiaryEdit.css"

import axios from '../../axios';
import {Link} from "react-router-dom";

class DiaryEdit extends Component {
  state = {
    forName: '',
    diaryInput: '',
    loading: false,
    id: ''
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/diary/${id}.json`)
        .then(diary => {
          if (diary.data.title) {
            this.setState({
              diaryInput: diary.data.title,
              forName: diary.data.name,
              id
            })
          } else {
            throw new Error('Нет данных');
          }
        }).catch(err => {
          console.log(err);
        });
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const diaryInput = this.state.diaryInput;
    const forName = this.state.forName;
    const id = this.state.id;

    axios.patch(`/diary/${id}.json`, {title: diaryInput, name: forName})
        .then(() => {
          this.props.history.push('/');
        })

  };

  render() {
    return (
        <Form className="AddForm ml-6" onSubmit={this.submitHandler}>
          <h1 className=" my-4">Редактировать запись</h1>
          <h3 className=" my-4">Имя записи</h3> 
          <FormGroup>
            <Input
                type="textarea"
                className="col-sm-4"
                rows="1"   
                name="forName"
                onChange={this.changeHandler}
                value={this.state.forName}
            />
          </FormGroup>
          <h3 className=" my-4">Cодержание записи</h3>
          <FormGroup>
            <Input
                type="textarea"
                name="diaryInput"
                className="col-sm-4 " 
                rows="9"  
                onChange={this.changeHandler}
                value={this.state.diaryInput}
            />
          </FormGroup>
          <FormGroup className="text-left">
            <Button color="success">Сохранить запись</Button>
            <Link to="/" className="btn btn-danger ml-2">Отмена</Link>
          </FormGroup>
        </Form>
    );
  }
}

export default DiaryEdit;
