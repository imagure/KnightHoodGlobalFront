import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select'
import ImageUploader from 'react-images-upload';

import classes from './RankingForm.css';
import ModalStyles from './ModalStyles';
import SelectStyle from './SelectStyles';

const _ = require('lodash');

const RankingForm = props => {
  const [state, setState] = useState({
    name: '',
    points: '',
    guild: '',
    boss: '',
    pictures: []
  });

  const openModal = () => {
    setState({
      ...state,
      isModalOpen: true});
  }

  const closeModal = () => {
    setState({
      name: '',
      points: '',
      guild: '',
      boss: '',
      pictures: []
    });
  }

  const handleChange = (entry, event_) => {
    state[entry] = event_.value
  }

  const onDrop = (pictureFiles, pictureDataURLs) => {
    state["pictures"] = state["pictures"].concat(pictureFiles);
  }

  if(props.category=="A") {
    return (
      <div className={classes.Title}>
        <button type="button"
                onClick={openModal}
                class={classes.Button}>
          {props.modalName}
        </button>

        <Modal
          isOpen={state.isModalOpen}
          onRequestClose={closeModal}
          style={ModalStyles}
        >

        {props.modalName}

        <br/>
        <br/>

        <form className={classes.Form}>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Name
              </label>
            </div>

            <br/>

            <div className={classes.col_2}>
              <input type="text"
                     onChange={(e) => handleChange("name", e.target)}></input>
            </div>
          </div>

          <br/>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Points
              </label>
            </div>

            <br/>

            <div className={classes.col_2}>
              <input type="text"
                     onChange={(e) => handleChange("points", e.target)}></input>
            </div>
          </div>

          <br/>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Guild
              </label>
            </div>

            <br/>

            <div className={classes.col_2}>
              <input type="text"
                     onChange={(e) => handleChange("guild", e.target)}></input>
            </div>
          </div>

          <br/>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Image
              </label>
            </div>

            <br/>

             <ImageUploader
               withIcon={true}
               buttonText="Choose an image"
               onChange={onDrop}
               imgExtension={[".jpg", ".jpeg", ".png"]}
               maxFileSize={5242880}
             />
          </div>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <button className={classes.SaveButton}
                      onClick={e => {props.onSavePointsButton(state) &&
                                           closeModal()} }
                > Enviar
              </button>
            </div>
          </div>

        </form>

        </Modal>
      </div>
    )
  }
  else if(props.category=="B") {
    return (
      <div className={classes.Title}>
        <button type="button"
                onClick={openModal}
                class={classes.Button}>
          {props.modalName}
        </button>

        <Modal
          isOpen={state.isModalOpen}
          onRequestClose={closeModal}
          style={ModalStyles}
        >

        {props.modalName}

        <br/>
        <br/>

        <form className={classes.Form}>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Name
              </label>
            </div>

            <br/>

            <div className={classes.col_2}>
              <input type="text"
                     onChange={(e) => handleChange("name", e.target)}></input>
            </div>
          </div>

          <br/>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Points
              </label>
            </div>

            <br/>

            <div className={classes.col_2}>
              <input type="text"
                     onChange={(e) => handleChange("points", e.target)}></input>
            </div>
          </div>

          <br/>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <label>
                Boss
              </label>
            </div>

            <br/>

            <div className={classes.col_2}>
            <Select
              closeMenuOnSelect={true}
              options={[
                {
                  value: "Avatar of Oshian",
                  label: "Avatar of Oshian"
                },
                {
                  value: "Bakunawa",
                  label: "Bakunawa"
                },
                {
                  value: "Rahab",
                  label: "Rahab"
                },
                {
                  value: "Aegaeon",
                  label: "Aegaeon"
                },
                {
                  value: "The Morgawr",
                  label: "The Morgawr"
                },
                {
                  value: "Dagon",
                  label: "Dagon"
                },
                {
                  value: "Sycorax",
                  label: "Sycorax"
                }
              ]}
              onChange={(e) => handleChange("boss", e)}
              styles={SelectStyle}
            />
            </div>

            <br/>
            <br/>
            <br/>

            <div className={classes.row}>
              <div className={classes.col_1}>
                <label>
                  Image
                </label>
              </div>

              <br/>

               <ImageUploader
                 withIcon={true}
                 buttonText="Choose an image"
                 onChange={onDrop}
                 imgExtension={[".jpg", ".jpeg", ".png"]}
                 maxFileSize={5242880}
               />
            </div>

          </div>

          <div className={classes.row}>
            <div className={classes.col_1}>
              <button className={classes.SaveButton}
                      onClick={e => {props.onSavePointsButton(state) &&
                                           closeModal()} }
                > Enviar
              </button>
            </div>
          </div>

        </form>

        </Modal>
      </div>
    )
  }

  return null;
}

export default RankingForm;
