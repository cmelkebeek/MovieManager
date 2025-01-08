import { useContext } from 'react';
import { WhishListContext } from '../context/WhishListProvider';
import WhishListCard from '../components/WhishListCard';

const Whishlist = () => {
    const { whishList, removeFromWhishList } = useContext(WhishListContext);

    return (
        <div className='container'>
            <h1>Liste de souhait</h1>
            {whishList && whishList.length === 0 ? (
                 <div className="no-results">
                    Votre liste de souhait est vide
                 </div>
            ): (
                <div>
                    <p className='margin-bottom'>Nombre de films dans la liste de souhait : {whishList.length}</p>
                    <ul className='cards'>
                    
                        {whishList.map((movie) => (
                            <div key={movie.id}>
                                <WhishListCard  movie={movie} removeFromWhishList={removeFromWhishList} />
                            </div>

                        ))}
                    </ul>
                    
                </div>
        )}
        </div>
    )
}

export default Whishlist;