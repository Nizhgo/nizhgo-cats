import React, {useEffect} from "react";
import LoadGif from "../Assets/Images/Loader.gif";

export default function useCatApi() {
    const [catImg, setCatImg] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const getCatImg = async () => {
        if (catImg !== LoadGif) {
            setIsLoading(true);
            await fetch("https://aws.random.cat/meow")
                .then(res => res.json())
                .then(data => setCatImg(data.file))
                .finally(() => setIsLoading(false));
        }
    }
    React.useEffect(() => {
        getCatImg();
    }, []);

    useEffect(() => {
        if (isLoading) {
            setCatImg(LoadGif);
        }
    }, [isLoading]);

    return {catImg, getCatImg, isLoading};
}

