package com.home.app.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
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
}
