import { useState } from 'react';
import useSWR from 'swr'; 

function LastSalesPage(){
    const [sales, setSales] = useState(); 
    const [isLoading, setIsLoading] = useState(false); 

    useSWR();
    


}

export default LastSalesPage; 