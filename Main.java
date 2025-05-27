public class Main{
    public static void main(String[] args}{
        String one = "Nixon"; 
        String two = "Reagan"; 
        String three = "LBJ"; 
        String four = "Carter"; 
        String option = "";
        String opt = "1. Nixon\n2. Reagan\n3. LBJ\n4. Carter"; 
        Scanner scan = new Scanner(System.in); 
        System.out.println("Which option would you like to chat with?" + opt); 
        int option = scan.nextInt(); 
        if (option == 1){
            president = one;
            Nixon.run(); 
        } else if (option == 2){
            president = two; 
            Reagan.reagan();
        } else if (option == 3){
            president = three; 
            LBJ.lbj(); 
        } else {
            president = four; 
            Carter.carter(); 
        }
        System.out.println("Thanks for chatting with " + president); 
    }
}