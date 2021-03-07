import React from 'react';
import './TinyTaco.css'
// import { Link } from 'react-router-dom';

const TinyTaco = (props) => {
  return (
    <div className="tiny-taco">
      <h2 className="tiny-taco-name">{props.name}</h2>
      <img className="tiny-taco-image" src="https://images.squarespace-cdn.com/content/v1/5bfdf67036099b8e030b4d4d/1545493410499-OM696CFBM4EDQT60EU6C/ke17ZwdGBToddI8pDm48kAM6QU2MT0r-lm30ms3hXGN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTISe_n7BUTzK8tFIlyCAO4Bd3_6jIaGpSNIq0ijetcE3WUfc_ZsVm9Mi1E6FasEnQ/HP4.png?format=2500w"/>
    </div>
  )
}

export default TinyTaco;
