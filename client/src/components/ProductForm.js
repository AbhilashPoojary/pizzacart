import React, { useState } from "react";

export default function ProductForm({ createProductValues }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState({ value: "veg" });
  const [small, setSmall] = useState(0);
  const [medium, setMedium] = useState(0);
  const [large, setLarge] = useState(0);
  const pizzaValues = (e) => {
    e.preventDefault();
    const pizzaValues = {
      name,
      image: imageUrl,
      description,
      category: type.value,
      varients: ["small", "medium", "large"],
      prices: [
        {
          small,
          medium,
          large,
        },
      ],
    };
    console.log(pizzaValues);
    createProductValues(pizzaValues);
  };

  return (
    <section className='card p-5 form'>
      <h3>Create product</h3>
      <form onSubmit={pizzaValues}>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='pizza name'
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            name='image'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            placeholder='image url'
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder='description text'
          />
        </div>
        <div className='mb-3'>
          <select
            className='form-select'
            value={type.value}
            onChange={(e) => setType({ value: e.target.value })}
          >
            <option value='veg'>Veg</option>
            <option value='nonveg'>Nonveg</option>
          </select>
        </div>
        <div className='mb-3'>
          <input
            type='number'
            className='form-control'
            name='smallPrice'
            value={small}
            onChange={(e) => setSmall(e.target.value)}
            required
            placeholder='Price for small varient'
          />
        </div>
        <div className='mb-3'>
          <input
            type='number'
            className='form-control'
            name='mediumPrice'
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            required
            placeholder='Price for medium varient'
          />
        </div>
        <div className='mb-3'>
          <input
            type='number'
            className='form-control'
            name='largePrice'
            value={large}
            onChange={(e) => setLarge(e.target.value)}
            required
            placeholder='Price for large varient'
          />
        </div>
        <button type='submit' className='btn btn-danger'>
          Submit
        </button>
      </form>
    </section>
  );
}
