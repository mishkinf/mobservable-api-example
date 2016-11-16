import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Table } from 'react-bootstrap';
import Faker from 'faker';
import Toggle from 'react-toggle';
import InlineEdit from 'react-edit-inline';
import Radium from 'radium';

@observer
class RandomList extends Component {
  render() {
    const { store: { randomstuff } } = this.props;

    return (
      <div style={styles.main}>
        <button style={styles.input} onClick={this.addSomething}>Add Something</button>

        <br />

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Something</th>
            </tr>
          </thead>
          <tbody>
            { this.renderRandomStuff() }
          </tbody>
        </Table>
      </div>
    );
  }

  renderRandomStuff() {
    const { store: { randomstuff } } = this.props;

    return randomstuff.data.map(something => (<tr key={something.name}>
        <td>{something.name}</td>
      </tr>)
    );
  }

  addSomething = (e) => {
    const { store: { randomstuff } } = this.props;

    var fakeThing = { name: Faker.name.findName() };
    randomstuff.create(fakeThing);
  }
};

const styles = {
  input: {
    fontSize: 18,
    padding: 5
  },
  main: {
    fontSize: 30
  }
}

export default Radium(RandomList);
