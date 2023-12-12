package com.payment.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.payment.models.ProcessingPaymentModel;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class PaymentController {

    private static Gson gson = new Gson();

    @GetMapping("/payment/{loanId}")
    public ResponseEntity<Map<String, String>> getAllData(@PathVariable String loanId) {


        Map<String, String> responseData = new HashMap<>();


        if(Objects.equals(loanId, "1111"))
        {
            responseData.put("LoanID", "1111");
            responseData.put("Status", "accepted");
        }

        else
        {
            responseData.put("LoanID", "2222");
            responseData.put("Status", "pending");
        }

        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/payment")
    /**
     * Payment with Stripe checkout page
     *
     * @throws StripeException
     */
    public String paymentWithCheckoutPage(@RequestBody ProcessingPaymentModel payment) throws StripeException {
        // We initilize stripe object with the api key
        init();
        // We create a  stripe session parameters
        SessionCreateParams params = SessionCreateParams.builder()
                // We will use the credit card payment method
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT).setSuccessUrl(payment.getSuccessUrl())
                .setCancelUrl(
                        payment.getCancelUrl())
                .addLineItem(
                        SessionCreateParams.LineItem.builder().setQuantity(payment.getQuantity())
                                .setPriceData(
                                        SessionCreateParams.LineItem.PriceData.builder()
                                                .setCurrency(payment.getCurrency()).setUnitAmount(payment.getAmount())
                                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData
                                                        .builder().setName(payment.getName()).build())
                                                .build())
                                .build())
                .build();
        // create a stripe session
        Session session = Session.create(params);
        Map<String, String> responseData = new HashMap<>();
        // We get the sessionId and we putted inside the response data you can get more info from the session object
        responseData.put("id", session.getId());
        // We can return only the sessionId as a String
        return gson.toJson(responseData);
    }

    private static void init() {
        Stripe.apiKey = "sk_test_51NtOVcSG37NEbQgwBBJlTIjUSwCT6Ymle8lSJkFuV1ozU4SbVSbElJWWciwOHZmIGBxZTNgFrB7otXylOqGyyxeW00OaPimO9q";
    }




}
