import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { select } from "../../actions/Date/select";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../actions/Mascotas/listMascotas";

const ACCESS_TOKEN = "3875372609247663";
const DOMAIN = "https://www.superheroapi.com/api.php/";

const Hero = () => {
  const [id, setId] = useState(null);

  const dispatch = useDispatch();

  const mascotas = useSelector((state) => state.mascota.data);

  const history = useHistory();
  useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  const getHeros = async () => {
    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`);

      const hero = await response.json();
      history.push(
        `/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}&full-name=${hero.biography["full-name"]}`
      );
      console.log("response", hero);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setId(value);
  };

  const handleChangeYear = (e) => {
    dispatch(select(e.target.value));
  };

  console.log("value", id);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <button onClick={getHeros}>Buscar</button>
      <br />
      <br />
      Hero
      <br />
      <br />
      <br />
      <label htmlFor="year">Año</label>
      <input type="text" id="year" onChange={handleChangeYear} />
      {mascotas.map((mascota, i) => (
        <li key={i}>{mascota}</li>
      ))}
    </div>
  );
};

export default Hero;
