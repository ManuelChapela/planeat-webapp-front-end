import React, { useState, useEffect } from 'react';
import btnAdd from './../../../assets/btnAdd.svg';

import useFetch from '../../../Hooks/useFetch';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export const FormStickers = ({ addSticker }) => {
  // Estado del componente
  const [sticker, setSticker] = useState({ title: '' });

  // Recoge el input del usuario y setea el estado
  const manageSticker = (e) => setSticker({ title: e.target.value });

  const options = [];

  // NUEVO -------------------------------------------------
  const [searchText, setSearchText] = useState('');
  const [ingredientes, setIngredientes] = useState([]);

  const [autocomplete, setAuto] = useState(null);

  const [fetchState, fetchData] = useFetch();

  useEffect(() => {
    const url = `http://localhost:5000/auto/${searchText}`;
    const method = 'GET';
    fetchData({ url, method });
  }, [fetchData, searchText]);

  useEffect(() => {
    fetchState.isSuccess && setIngredientes(fetchState.data.response);
  }, [fetchState.data, fetchState.isSuccess]);
  // -------------------------------------------------

  // Agrega el sticker al array de sticker de painter
  const addingSticker = (e) => {
    e.preventDefault();
    addSticker(sticker.title);

    e.target.clear.value = '';
  };

  const handleAutocomplete = (e, newValue) => {
    if (newValue != null) {
      console.log("NUEVO", newValue);
      console.log("NUEVO ID", newValue.IdIngrediente);
      setAuto(newValue);
      console.log(newValue.Ingrediente);
      addSticker({ title: newValue.Ingrediente, id: newValue.IdIngrediente });
      e.target.value = '';
    }
  };

  const handleSearchText = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  return (
    <form className="input__form-box" onSubmit={addingSticker}>
      <div className="input__box">
        {/*         <form className='input__form-box' onSubmit={addingSticker} >
            <div className="input__box">
                <input onChange={manageSticker} type="text" id='clear' />
                <img src={btnAdd} alt="Botón añadir"/>

            </div>
        </form> */}

        <Autocomplete
          freesolo
          options={ingredientes}
          noOptionsText=""
          getOptionLabel={(options) => options.Ingrediente}
          onChange={handleAutocomplete}
          onInputChange={handleSearchText}
          renderInput={(params) => (
            <TextField {...params} label="Selecciona..." fullWidth />
          )}
        />
        <button>ADD</button>
      </div>
    </form>
  );
};
