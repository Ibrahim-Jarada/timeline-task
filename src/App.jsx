import styled from 'styled-components';
import {Timeline} from './sections'
const TestContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 542px;
  border: 2px solid red;
  padding: 32px;
  background-color: #faf9f7;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 375px;
  }
`;
function App() {

  return (
    <TestContainer>
      <Timeline
        title={"Assessment timeline"}
        tasks={[
          {
            id: 1,
            title: "Rater list to be submitted",
            date: "15 December 2022",
            status: "completed",
          },
          {
            id: 2,
            title: "Assessment window opens",
            date: "18 December 2022",
            status: "completed",
          },
          {
            id: 3,
            title: "Assessment window closes",
            date: "20 December 2022",
            status: "completed",
          },
          {
            id: 4,
            title: "Debrief due",
            date: "22 December 2022",
            status: "in-progress",
          },
          {
            id: 5,
            title: "Project closes",
            date: "28 December 2022",
            status: "todo",
          },
        ]}
      />
    </TestContainer>
  );
}

export default App
