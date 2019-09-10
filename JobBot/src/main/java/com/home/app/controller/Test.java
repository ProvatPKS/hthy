package com.home.app.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;

public class Test {
    public static void main(String[] args) {

        LocalDate todaydate = LocalDate.now();
        String date = "2/25/2004";
       // LocalDate todaydate = LocalDate.parse(date, DateTimeFormatter.ofPattern("M/d/yyyy"));

        System.out.println("Months first date in yyyy-mm-dd: " +todaydate.withDayOfMonth(1));
        System.out.println("Months last date in yyyy-mm-dd: " +todaydate.withDayOfMonth(todaydate.getMonth().length(todaydate.isLeapYear())));

        System.out.println("Next Months last date in yyyy-mm-dd: " +todaydate.with( TemporalAdjusters.firstDayOfNextMonth() ) ); // Stop here for first of next month.

        System.out.println("Next Months last date in yyyy-mm-dd: " +todaydate.with( TemporalAdjusters.firstDayOfNextMonth() )  // Stop here for first of next month.
                .with( TemporalAdjusters.lastDayOfMonth() ));  // Include this for last day of next month.);


    }
}
