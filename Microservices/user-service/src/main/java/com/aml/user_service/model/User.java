package com.aml.user_service.model;

import jakarta.persistence.*;

@Entity
@Table(name="FI")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;
    private String institution_name;
    private String location;
    private FiCategory category;


    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getInstitution_name() {
        return institution_name;
    }

    public void setInstitution_name(String institution_name) {
        this.institution_name = institution_name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public FiCategory getCategory() {
        return category;
    }

    public void setCategory(FiCategory category) {
        this.category = category;
    }

/*
    public static record TempUser (long id, String name, String location, FiCategory category){};

    public TempUser get_object_as_record(){
        return new TempUser(this.user_id, this.institution_name, this.location, this.category);
    }
    @Override
    public String toString(){
        return get_object_as_record().toString();
    }
*/

}
