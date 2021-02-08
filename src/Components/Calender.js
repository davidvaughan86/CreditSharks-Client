var Schedule = React.createClass({
    render: function() {
      var link = <a href={this.makeHref('schedule')}>schedule</a>;
      return <div>Please<a href='https://calendly.com/thecreditsharks'>Schedle an appointment</a>here</div>;
    }
  });