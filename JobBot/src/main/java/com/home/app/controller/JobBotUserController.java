package com.home.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.worldpay.app.jobbot.exception.JbotApplicationException;
import com.worldpay.app.jobbot.model.User;
import com.worldpay.app.jobbot.model.botjson.JobBotUserTokenRequest;
import com.worldpay.app.jobbot.model.botjson.JobBotUserTokenResponse;
import com.worldpay.app.jobbot.model.botjson.Status;
import com.worldpay.app.jobbot.service.impl.JbotUserLoginServiceImpl;

@RestController
public class JobBotUserController {

    @Autowired
    JbotUserLoginServiceImpl JbotUserLoginService;
    
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView init() {

        ModelAndView model = new ModelAndView("index");
        return model;
    }


    @PostMapping (path = "/login", consumes =MediaType.APPLICATION_JSON_VALUE,  produces = MediaType.APPLICATION_JSON_VALUE)
    public JobBotUserTokenResponse retrieveCoursesForStudent(@RequestBody JobBotUserTokenRequest jobBotUserTokenRequest) {

        System.out.println(jobBotUserTokenRequest.getJbotUserName());
        System.out.println(jobBotUserTokenRequest.getJbotToken());

        JobBotUserTokenResponse JobBotUserTokenResponse = new JobBotUserTokenResponse();
        Status status =  new Status();
        try {
            JobBotUserTokenResponse = JbotUserLoginService.getUserLogin(jobBotUserTokenRequest);
            status.setStatus("success");

        } catch (JbotApplicationException jbotException) {
            status.setStatus(jbotException.getMessage());

        }

        JobBotUserTokenResponse.setStatus(status);
        return JobBotUserTokenResponse;
    }
}
