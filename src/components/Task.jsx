import styled from 'styled-components';
import PropTypes from 'prop-types';
import DoneIcon from './DoneIcon';
import ToDoIcon from './ToDoIcon';

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width:${({ status }) => {
    if (status === 'in-progress') {
      return 'calc(100% - 17px)';
    }
    return '100%;';
  }};
  padding-left: ${({ status }) => {
    if (status === 'in-progress') {
      return '27px';
    }
    return '10px';
  }};

  background-color: ${({ status }) => {
    if (status === 'in-progress') {
      return '#F1F6F9';
    }
    return 'transparent';
  }};
`;

const TextWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  p {
    margin: 0;
    padding: 0;
    padding-left: 10.25px;
  }
`;

const Title = styled.p`
  font-family: Museo Sans;
  font-size: 16px;
  font-weight: 600;
`;

const DateText = styled.p`
  font-family: Museo Sans;
  font-size: 14px;
  font-weight: 400;
`;

const Task = ({ title, status, date }) => (
  <TaskWrapper status={status}>
    {status === 'completed' ? <DoneIcon /> : <ToDoIcon />}
    <TextWrapper>
      <Title>{title}</Title>
      <DateText>{date}</DateText>
    </TextWrapper>
  </TaskWrapper>
);

export default Task;

Task.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['completed', 'in-progress', 'todo']),
}).isRequired;
