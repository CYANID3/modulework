import React from 'react';
import {ListGroup} from "reactstrap";
import DiaryItem from "./DiaryItem/DiaryItem";

const DiaryList = ({diaries, removeDiary, loading}) => {
  const diaryList = diaries.map(diary => {
    return <DiaryItem
        key={diary.id}
        name={diary.name}
        title={diary.title}
        date={diary.date}
        remove={() => removeDiary(diary.id)}
        loading={loading}
        id={diary.id}
    />
  });
  return (
      <ListGroup>
        {diaryList}
      </ListGroup>
  );
};

export default DiaryList;
