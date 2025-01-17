package net.adrianh.drink.model.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "DRINK_USER") // "USER" is reserved
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String accountName;

    private String displayName;

    @JsonbTransient
    private String password;
    @JsonbTransient
    private String salt;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    
    @PrePersist
    private void prePersist() {
        createdAt = new Date();
    }

    //a user has many created drinks
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonbTransient
    private List<Drink> createdDrinks = new ArrayList<>();

    //a user has many votes
    @OneToMany(mappedBy = "user_id", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonbTransient
    private List<Vote> votes = new ArrayList<>();

    public void addVote(Vote vote) {
        votes.add(vote);
        vote.setUser_id(this);
    }

    public void addDrink(Drink drink) {
        createdDrinks.add(drink);
        drink.setUser(this);
    }

}
