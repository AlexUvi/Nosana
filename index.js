public class Main {

    public static void main(String[] args) {
        int size = 0;
        for (int i = 2; i <= 20; i++){
            if (i % 2 == 0){
                size++;
            }
        }
        int [] Massive = new int[size];
        for (int i = 2, index = 0; i <= 20; i++){
            if (i % 2 == 0){
                Massive[index] = i;
                System.out.print(Massive[index] + " ");
                index++;
            }
        }
        System.out.println(" ");
        for(int i = 0; i < Massive.length; i++){
            System.out.println(Massive[i]);
        }
    }
}
