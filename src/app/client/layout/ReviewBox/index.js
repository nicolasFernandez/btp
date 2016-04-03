import { browserHistory as history } from 'react-router';
import { connect } from 'react-redux';
import styles from './styles';
import { Button, Input } from 'react-bootstrap';

export default connect(({user: { loggedIn }}) => ({ loggedIn }), {

})(
class ReviewBox extends React.Component {
  constructor(p) {
    super(p);
    this.state = {};
  }
  submit(e) {
    e.preventDefault();

    const { loggedIn, entityId } = this.props;

    if (!loggedIn) {
      history.push('/login');
      return;
    }
    const $reviewBody = e.currentTarget.querySelector('[name=reviewBody]');

    fetch(`/reviews.json`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reviewBody: $reviewBody.value, entityId, })
    })
    .then(r => r.json())
    .then(r => {
      this.props.onSubmit();
      $reviewBody.value = '';
      console.log(r);
    });
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <div className={`ReviewBox`} style={styles.wrapper}>
        <form onSubmit={e => this.submit(e)}>
          <Input type="textarea" disabled={!loggedIn} style={styles.textarea} name="reviewBody"
            placeholder={'Enter your comment ' + (!loggedIn ? ' (You need to be logged in first)' : '')} rows="4" />
          <Button bsStyle="info">{loggedIn ? 'Review' : 'Login'}</Button>
        </form>
      </div>
    );
  }
}
)
