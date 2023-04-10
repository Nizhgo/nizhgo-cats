import { useEffect, useState } from "react";
import type { FC } from "react";
import LoadGif from "../Assets/Images/Loader.gif";

export type CatApiReturnType = {
    catImg: string;
    getCatImg: () => Promise<void>;
    isLoading: boolean;
};

const useCatApi: () => CatApiReturnType = () => {
    const [catImg, setCatImg] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getCatImg = async () => {
        try {
            if (catImg !== LoadGif) {
                setIsLoading(true);
                const res = await fetch("https://api.thecatapi.com/v1/images/search");
                const data = await res.json();
                setCatImg(data[0].url);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCatImg();
    }, []);

    useEffect(() => {
        if (isLoading) {
            setCatImg(LoadGif);
        }
    }, [isLoading]);

    return { catImg, getCatImg, isLoading };
};

export default useCatApi;
