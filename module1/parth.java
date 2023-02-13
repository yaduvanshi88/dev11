import java.util.*;
class parth{
    public static void main(String args[])
    {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int os=n/2;
        int st=1;
        
        for(int i=1;i<=n;i++)
        { if(i==(n/2)+1)
            {
                for(int j=1;j<=st;j++)
                System.out.print("@");
                for(int k=1;k<=n+2;k++)
                {
                    System.out.print("*");
                }
                System.out.println();
                os++;
                st--;

            }
            else if(i<=n/2)
            {
                for(int j=1;j<=os;j++)
                {
                    System.out.print(" ");
                }
                for(int k=1;k<=st;k++)
                {
                    System.out.print("@");
                }
                System.out.println();
                st++;
                os--;
                

            }else
            {
                
                for(int j=1;j<=os;j++)
                {
                    System.out.print(" ");
                }
                for(int k=1;k<=st;k++)
                {
                    System.out.print("@");
                }
                for(int e=1;e<=n+1;e++)
                {
                    System.out.print(" ");
                }
                System.out.print("*");
                System.out.println();
                os++;
                st--;


            }
        }
            int nosp=n+2;
            int v=n;
            for(int k=1;k<=n+2;k++)
            {
                if(k<=n/2+1)
                {
                    for(int  i=1;i<=((n/2)+1)+(n+1);i++)
                    {
                        System.out.print(" ");
                    }
                    System.out.print("*");
                    System.out.println();

                }
                else{
                    for(int i=1;i<=nosp;i++)
                    {
                        System.out.print(" ");

                    }
                    for(int i=1;i<=v;i++)
                    {
                        System.out.print("@");
                    }
                    System.out.println();
                    v=v-2;
                    nosp++;
                    
                }
            }

        }
       
    }
     /*if(n==1)
        {
            System.out.println("you have eneterd wrong no");
        }
        else{
       for(int i=1;i<=n+1;i++)
       {
        System.out.println("e");
       }
       //System.out.println();
       for(int i=1;i<=n+2;i++)
       {
        System.out.print("e");
       }
       System.out.println();
       int st=1;
       int nsp=n+1;
       for(int i=1;i<=n;i++)
       {
        for(int j=1;j<=nsp;j++)
        {
            System.out.print(" ");
        }
        for(int k=1;k<=st;k++)
        {
            System.out.print("@");
        }
        System.out.println();
        st++;
        nsp--;
       }
    }


    }
}*/

