import { likeLionMembers } from '../data/likeLionMembers.js';

class Home extends React.Component {
  state = {
    members: this.props.likeLionMembers ?? [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
    ],
  };

  handleFilterLab = () => {
    this.setState({
      members: this.state.members.filter((member) => {
        // A && B?
        // A || B?
        return member.name.includes('c') || memeber.name.includes('a');
      }),
    });
  };

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <h2>리스트 렌더링</h2>

        <div role='group' style={{ display: 'flex', gap: 8 }}>
          {Array(11)
            .fill()
            .map((_, index) => {
              return (
                <button
                  key={index}
                  type='button'
                  style={{ marginBottom: 20 }}
                  onClick={() => this.handleFilterLab(labIndex)}>
                  LAB {labIndex}
                </button>
              );
            })}
        </div>
        <ul>
          {this.state?.members.map(({ id, lab, name, gender }) => {
            <li key={id}>
              <p>
                <span>{gender.includes('여성') ? '🙍‍♀️' : '🙍‍♂️'}</span>
                {name}
              </p>
            </li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

functoin Button(props){
  return (
    <button
  )
}

export default Home;
