import React from "react";
// import {Modal, OverlayTrigger, popover} from "react";
// import Body from "./components/body"
// import one from './galeryimg/one.jpg'
// import two from './galeryimg/two.jpg'
// import three from './galeryimg/three.jpg'
// import four from './galeryimg/four.jpg'
// import five from './galeryimg/five.jpg'
// import six from './galeryimg/six.jpg'
// import seven from './galeryimg/seven.jpg'
// import eight from './galeryimg/eight.jpg'
// import nine from './galeryimg/nine.jpg'
// import ten from './galeryimg/ten.jpg'

import PropTypes from 'prop-types';

class Modal extends React.Component {

  render() {
    return (
      <div tabindex="-1" class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close" type="button" data-dismiss="modal">×</button>
              <h3 class="modal-title">Heading</h3>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">
              <button class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Modal;