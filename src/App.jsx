import styled from 'styled-components';
import data from './helpers/data';
import { Timeline } from './sections';

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
const App = () => (
  <TestContainer>

    {data?.length > 0 ? (
      <Timeline title="Assessment timeline" tasks={data} />
    ) : (
      <h1>No Data Provided 😅</h1>
    )}
  </TestContainer>
);

export default App;
