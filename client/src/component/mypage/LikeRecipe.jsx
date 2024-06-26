import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AllRecipeQuery } from '../../query/recipeQuerys';
import { getToken } from '../../storage/loginedToken';
import { setTitle } from '../../util/setTitle';
import Loading from '../include/Loading';

const LikeRecipe = () => {
    const { data: recipeList, isLoading: recipeIsLoading, isError: recipeIsError } = AllRecipeQuery();
    const [myLikeRecipe, setMyLikeRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadMyLikeRecipe();
        setTitle('좋아하는 레시피');
    }, []);


    const loadMyLikeRecipe = async () => {
        setIsLoading(true);
        await axios.get(process.env.REACT_APP_SERVER_URL + "/mypage/like_recipe", {
            params: {
                u_no: getToken("loginedUNo")
            }
        }).then((data) => {
            setMyLikeRecipe(data.data);
        }).catch((error) => {
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <>
            {isLoading ? <Loading /> : null}

            <div id='like_recipe' className='content-wrap'>
                <h2 className='title'>좋아하는 레시피</h2>

                <div className='content'>
                    {
                        recipeList && myLikeRecipe && Object.keys(myLikeRecipe)?.length > 0 ?
                            Object.keys(myLikeRecipe).map((el, idx) => {
                                let item = recipeList[el];

                                return <Link to={"/recipe/view/" + el} className='recipe-item' key={idx} >
                                    <div className='recipe-info'>
                                        <div>
                                            <img src={item.RECP_MAIN_IMG} alt={item.RECP_NAME} />
                                        </div>

                                        <div className='recipe-sub-info'>
                                            <div className='recipe-name'>{item.RECP_NAME}</div>

                                            <div className='recipe-third-info'>
                                                <span>{item.RECP_CATEGORY_NAME}</span>
                                                <span>{item.RECP_REGION_NAME}</span>
                                                <span>{item.RECP_TIME}</span>
                                            </div>

                                            <div className='recipe-third-info'>
                                                <span>{item.RECP_KCAL}</span>
                                                <span>{item.RECP_SERVIN}</span>
                                                <span>{item.RECP_DIFFICULT == "초보환영" ? "★" : item.RECP_DIFFICULT == "보통" ? "★★" : "★★★"}</span>
                                            </div>

                                            <div className='recipe-intro'>{item.RECP_INTRO}</div>
                                        </div>
                                    </div>
                                </Link >
                            })
                            :
                            <div className='empty'>좋아하는 레시피가 없습니다.</div>
                    }
                </div>
            </div>
        </>
    );
};

export default LikeRecipe;