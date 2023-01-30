import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Task } from '../components';

const Hr = styled.div`
  width: 24px;
  height: 2px;
  background-color: #c2670c;
  margin-top:0
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const TitleWrapper = styled.p`
  font-family: Museo Sans;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const TaskContainer = styled.div`
  padding-top: 24px;
  width: 100%;
`;

const Timeline = ({ title = '', tasks = [] }) => (
  <Container>
    <TitleWrapper>{title}</TitleWrapper>
    <Hr />
    <TaskContainer>
      {tasks.map(({
        id, title, status, date,
      }) => (
        <Task key={id} title={title} status={status} date={date} />
      ))}
    </TaskContainer>
  </Container>
);

Timeline.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['completed', 'in-progress', 'todo']),
    }),
  ).isRequired,
};

export default Timeline;
