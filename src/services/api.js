import { toast } from 'react-toastify';


export const postTransactionData = async (data) => {
  toast.success('Transaction Successfully Done!!');

};

export const fetchData = async (url) => {
  try {
    // Display loading toast while fetching data
    toast.info('Fetching data...');

    const response = await fetch(url);
    const data = await response.json();

    // Close the loading toast once data is fetched
    toast.dismiss();

    return data;
  } catch (error) {
    // Display an error toast if fetching data fails
    toast.error('Error fetching data');
    throw error;
  }
};
