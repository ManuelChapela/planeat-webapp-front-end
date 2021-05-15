import React from 'react';

export const Card = ({item}) => {
    return (
        <div className="card">
            <div className="card__img-box">
                <img className='card__img' src={item.img} alt="" />

                <div className="card__title-box">
                    <h3>Comida</h3>
                </div>

                <div className="card__icon-box">
                    <p>icon 1</p>
                    <p>icon 2</p>
                </div>

            </div>

            <div className="card__title-des">
                <div className="card__title-des--box">
                    <h2>Espagueti Bolognesa</h2>
                    <h4>Subtítulo</h4>
                </div>
                <hr />
            </div>

            <div className="card__ingredients-box">

                <div className="card__detail-text--box">
                    <div className="card__preferences">
                        <p>BARATO</p>
                        <small>/</small>
                        <p>15 minutos</p>
                    </div>

                    <p className='card__ing-text'>Ingredientes</p>
                    <div className="card__ingredients">
                        <div className="ingredients__stickers-box">
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                            <p>sticker</p>
                           
                        </div>

                        <div className="card__button-box">
                            <button className='card__button'>Ver Receta</button>
                        </div>
                    </div>
                    


                </div>

            </div>

        </div>
    )
}
