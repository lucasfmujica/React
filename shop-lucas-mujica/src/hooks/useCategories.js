import { useState, useEffect } from "react";
import { getCategories } from "../mocks/productService";

export function useCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(getCategories());
    }, []);

    return { categories };
}
