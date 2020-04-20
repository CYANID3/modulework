import React, {Component} from 'react';
import {Button, FormGroup, Input} from "reactstrap";
import "./DiaryAdd.css"


class DiaryAdd extends Component {
  render() {
    return (
        <form onSubmit={this.props.send}>
          <h1 className=" my-4">Добавить запись</h1>
          <h3 className=" my-4">Имя записи</h3>
          <FormGroup>
            <Input 
            placeholder="Введите имя записи"
            type="textarea" 
            className="col-sm-4" 
            rows="1"  
            name="forName" 
            onChange={this.props.change} 
            />
          </FormGroup>
          <h3 className=" my-3">Cодержание записи</h3>
          <FormGroup>
            <Input 
            placeholder="Введите содержание записи"
            type="textarea" 
            className="col-sm-4 " 
            rows="9" 
            name="diaryInput" 
            onChange={this.props.change} 
            />
          </FormGroup>      
          <FormGroup className="text-left">
            <Button color="success">Добавить запись</Button>
          </FormGroup>
        </form>
    );
  }
}

export default DiaryAdd;
