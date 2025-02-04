package com.aml.auth_service.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class KeyDb {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long api_key_id;
    private long user_id;
    private String api_key;

    public long getApi_key_id() {
        return api_key_id;
    }

    public void setApi_key_id(long api_key_id) {
        this.api_key_id = api_key_id;
    }

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public String getApi_key() {
        return api_key;
    }

    public void setApi_key(String api_key) {
        this.api_key = api_key;
    }


}
