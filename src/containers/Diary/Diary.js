import React, {Component} from 'react';
// import DiaryAdd from "../../components/DiaryAdd/DiaryAdd";


import axios from "../../axios";
// import {Spinner} from "reactstrap";
import DiaryList from "../../components/NewsList/DiaryList";
import Carousel from "../../components/Carousel/Carousel"

class Diary extends Component {
  state = {
    forName: '',
    diaryInput: '',
    diary: [],
    loading: false,
    removing: false
  };

  // changeHandler = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // submitHandler = event => {
  //   event.preventDefault();
  //   this.setState({loading: true});

  //   const diary = [...this.state.diary];

  //   const diaryItem = {
  //     title: this.state.diaryInput,
  //     date: new Date().getTime()
  //   };

  //   axios.post('/diary.json', diaryItem)
  //       .then(response => {
  //         diaryItem.id = response.data.name;
  //         diary.push(diaryItem);
  //         this.setState({diary});
  //       })
  //       .finally(() => {
  //         this.setState({loading: false});
  //       });
  // };

  componentDidMount() {
    axios.get('/diary.json').then(diaries => {
      if (!diaries.data) return;
      const diary = Object.keys(diaries.data).map(key => {
        return {
          name: diaries.data[key].name,
          title: diaries.data[key].title,
          date: diaries.data[key].date,
          id: key
        }
      });

      this.setState({diary});
    })
  }

  removeDiaryHandler = id => {
    this.setState({removing: true});

    const index = this.state.diary.findIndex(diaryItem => diaryItem.id === id);
    const diary = [...this.state.diary];
    diary.splice(index, 1);

    axios.delete(`/diary/${id}.json`)
        .then(() => {
          this.setState({diary});
        })
        .finally(() => {
          this.setState({removing: false});
        })

  };


  render() {
    // let formAdd = <DiaryAdd change={this.changeHandler} send={this.submitHandler}/>;
    // if (this.state.loading) {
    // //   formAdd = (
    // //       <div className="d-flex justify-content-center my-5">
    // //         <Spinner color="primary" style={{ width: '3rem', height: '3rem' }}/>
    // //       </div>
    // //   );
    // }
    return (
        <div className="Diary">
             <Carousel/>
          <DiaryList
              diaries={this.state.diary}
              removeDiary={this.removeDiaryHandler}
              loading={this.state.removing}
          />
        </div>
    );
  }
}

export default Diary;
