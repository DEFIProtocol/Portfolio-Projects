import React from 'react';
import {Card} from 'antd';

const style ={
  card: {
    backgroundColor: "#202020",
    margin: "15px",
    padding: "20px",
    color: "#909090"
  }
}
function Work() {
  return (
    <div>
      <h2 style={{textAlign: "center", color: "white"}}>Work History</h2>
      <Card style={style.card}>
        <div>
          <h4>DoorDash</h4>
          <h5>Delivery Driver/Self-Employed</h5>
          <span>Sept 2021 - Present<br />
          Analyze incoming contracts on the Door Dash application, and choose to accept order within a short time frame. Pick up order from designated location, and deliver it to persons residence.</span>
        </div>
      </Card>
      <Card style={style.card}>
        <div>
          <h4>Kobe Steak House</h4>
          <h5>Server</h5>
          <span>Jan 2021 - Feb 2021<br />
          Present a clean working environment, and greet customers. Thorough knowledge of the menu, and vast alcohol selection was required. Each meal came with a soup and salad, and it was very fast paced environment. Often times we would be caring for 24 guests at a time</span>
        </div>
      </Card>
      <Card style={style.card}>
        <div>
          <h4>Sole Proprietorship</h4>
          <h5>Carpenter / Project Manager</h5>
          <span>Oct 2017 - Feb 2021<br />
          Back of house operations included bid work, tracking expenses, working with contractors to pull permits, and use of Quickbooks. Completed projects include 4 decks, a garage, an interior closet, numerous load bearing wall removals, and reinforcing burnt house/ collapsing house.</span>
        </div>
      </Card>
      <Card style={style.card}>
        <div>
          <h4>Turner Construction</h4>
          <h5>Carpenter</h5>
          <span>Jan 2019 - April 2019 <br />
          Provide site with all necessary temporary structures to keep others safe and warm. Structures involved platforms, handrail, stairs and ramps, and weather protection.</span>
        </div>
      </Card>
      <Card style={style.card}>
        <div>
          <h4>Stephensen and Smith</h4>
          <h5>Carpenter</h5>
          <span>
            Sept 2018 - Dec 2018 <br />
          Largely this position was completing footings and foundation walls. The process involved working with foreman to examine blue print. Lay out footings off existing building or engineers points to set up project. Other tasks were digging footings, setting elevation, tying rebar, setting anchor bolts, pouring/finishing concrete and form setting.</span>
        </div>
      </Card>
      <Card style={style.card}>
        <div>
          <h4>Kiewit</h4>
          <h5>Carpenter</h5>
          <span>
          Dec 2015 - Dec 2017<br />
            Participated in Carpenters Union by tracking hours and taking classes. Learned various different skills a carpenter should know how to performed. Received certifications such as: Osha, CPR, Boom and scissor lift certification, qualified rigger and Incra certification. Learned skills on the job such as framing, finish work, siding, form setting, fire proofing, and many other tasks.</span>
        </div>
      </Card>
    </div>
  )
}

export default Work