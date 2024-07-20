import React, { Component } from "react";
class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">My Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5417521612303!2d106.68878397570322!3d10.769756459315378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3da67b38d5%3A0x173ccef2ae6a5d44!2sNike!5e0!3m2!1svi!2s!4v1721471532741!5m2!1svi!2s"
          width="800"
          height="600"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}
export default Gmap