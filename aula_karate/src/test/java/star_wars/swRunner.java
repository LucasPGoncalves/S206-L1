package star_wars;

import com.intuit.karate.junit5.Karate;

class swRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("sw").relativeTo(getClass());
    }    

}