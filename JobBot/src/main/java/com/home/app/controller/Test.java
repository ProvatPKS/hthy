package com.home.app.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Test {
    public static void main(String[] args) {

        //LocalDate todaydate = LocalDate.now();
        String date = "2/25/2004";
        LocalDate todaydate = LocalDate.parse(date, DateTimeFormatter.ofPattern("M/d/yyyy"));

        System.out.println("Months first date in yyyy-mm-dd: " +todaydate.withDayOfMonth(1));
        System.out.println("Months last date in yyyy-mm-dd: " +todaydate.withDayOfMonth(todaydate.getMonth().length(todaydate.isLeapYear())));
    }
}
