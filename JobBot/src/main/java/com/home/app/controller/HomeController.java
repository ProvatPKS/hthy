package com.home.app.controller;

import com.home.app.model.LoginDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.xml.ws.Response;

@RestController
//@RequestMapping("/api")
public class HomeController {

    @Value("${spring.application.name}")
    String appName;

    /*@GetMapping("/home")
    public String homePage(Model model) {
        model.addAttribute("appName", appName);
        return "index";
    }*/

   @GetMapping("/home")
    public ModelAndView homePage() {
        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("appName", appName);
        return modelAndView;
    }

    @RequestMapping (value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public LoginDTO login(@RequestBody LoginDTO loginDTO) {

        System.out.println("loginDTO.getUsername : "+loginDTO.getUsername());
        System.out.println("loginDTO.getPassword : "+loginDTO.getPassword());

        return loginDTO;
    }

}
