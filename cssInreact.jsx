
// Using CSS in react there are three ways
// Inline CSS
function MyComponent() {
    const style = {
      backgroundColor: 'blue',
      color: 'white'
    };
    return (
      <div style={style}>
        Hello Ritesh
      </div>
    );
  }
// CSS Modules
import styles from './MyComponent.module.css';
function MyComponent() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Hello World
      </p>
    </div>
  );
}
//Styled Components
import styled from 'styled-components';
const Container = styled.div`
  background-color: blue;
  color: white;
`;
function MyComponent() {
  return (
    <Container>
      Hello World
    </Container>
  );
}



  