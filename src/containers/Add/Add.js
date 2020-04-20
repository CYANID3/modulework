import React, { Component } from 'react';
import DiaryAdd from "../../components/DiaryAdd/DiaryAdd";
import axios from "../../axios";
// import Moment from "react-moment";

export class Add extends Component {
    state = {
        forName:'',
        diaryInput: '',
        diary: [],
        loading: false,
        removing: false
      };
    
      changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    
      submitHandler = event => {
        event.preventDefault();
        this.setState({loading: true});
    
        const diary = [...this.state.diary];
       
      
    
        const diaryItem = {
          name: this.state.forName,
          title: this.state.diaryInput,
          date: new Date().toLocaleString()
        };
       
        axios.post('/diary.json', diaryItem)
            .then(response => {
              diaryItem.id = response.data.name;
              diary.push(diaryItem);
              this.setState({diary});
              this.props.history.push('/');
            })
            .finally(() => {
              this.setState({loading: false});
            });
            // .then(() => {
            //     this.props.history.push('/');
            //   })
      };
    


    
      render() {
        let formAdd = <DiaryAdd change={this.changeHandler} send={this.submitHandler}/>;
        return (
            <div className="Diary">
              {formAdd}
            </div>
        );
      }
    }

export default Add
