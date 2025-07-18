public class quick{
    public static int partition(int[]arr, int low, int high){
        int i=low-1;
        int piv = arr[high];

        for (int j=low; j<high; j++){
            if (arr[j] < piv){
                i++;
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        i++;
        int temp = arr[high];
        arr[high] = arr[i];
        arr[i] = temp;  
        
    }
    public static void main(String []args){

    }
}