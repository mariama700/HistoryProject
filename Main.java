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
        int num = scan.nextInt(); 
        if (num == 1){
            president = one;
            Nixon.run(); 
            System.out.println("If you need a scandal to be caught up in, you know who to ask 😄"); 
        } else if (num == 2){
            president = two; 
            Reagan.reagan();
            System.out.println("I need to continue sending the welfare bums back to work now ✍️"); 
        } else if (num == 3){
            president = three; 
            LBJ.lbj(); 
            System.out.println(""); 
        } else {
            president = four; 
            Carter.carter(); 
            System.out.println(""); 
        }
        System.out.println("Thanks for keeping " + president + " entertained"); 
    }
}