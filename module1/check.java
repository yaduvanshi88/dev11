import java.util.*;
public class check 
{
    public static void main(String args[])
    {
        HashSet<String>hs=new HashSet<>();
        hs.add("parth");
        hs.add("ravi");
        hs.add("aman");
        hs.add("goku");
        Iterator<String>it=hs.iterator();
        while(it.hasNext())
        {
            String name=it.next();
            System.out.println(name);
        }
        
    }

    
}
