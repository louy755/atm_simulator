var MY_APP = MY_APP || {};

jQuery(function($){

  MY_APP.ATM = (function(){

    var amount_field = $('#amount'),
      current_funds = $('#current_funds'),
      form = $('#withdraw form'),
      success_message = $('#withdraw_success'),
      error_message = $('#withdraw_error'),
      refill_link = $('#refill_info'),
      ajax_loader = $('.ajax-loader'),
      message_duration = 5 * 1000,
      show_loader, hide_loader,
      display_success_message,
      display_error,
      on_withdraw_success,
      add_refill_link,
      update_balance;

    display_error = function(error){
      success_message.hide();
      error_message.html('<p>The following error has been encountered: ' + error + '.</p>');
      error_message.show();
    };

    display_success_message = function(dispensed){
      error_message.hide();
      success_message.html('<p>' + dispensed + ' have been successfully dispensed from your account.</p>');
      success_message.show();
    };

    on_withdraw_success = function(data){
      update_balance(data.new_balance)
      display_success_message(data.dispensed);
    };

    update_balance = function update_balance(new_balance){
      current_funds.text(new_balance);
    };

    amount_field.on('keydown', function(e){
      var key_code = e.which;
      if($.inArray(key_code, [46, 8, 9, 27, 13, 110, 190, 37, 38, 39, 40]) !== -1 || (key_code >= 48 && key_code <= 57) ){
        return;
      }else{
        e.preventDefault();
      }
    });

    hide_loader = function(){
      ajax_loader.hide();
    };

    show_loader = function(){
      ajax_loader.show();
    };

    // Only for testing purposes
    refill_link
      .on('ajax:success', function(jqXHR, data, status){
        update_balance(data.new_balance);
      });

    form
      .on('ajax:success', function(jqXHR, data, status){
        if(data.error){
          display_error(data.message);
        }else if(data.success){
          on_withdraw_success(data)
        }
      })
      .on('ajax:error', function(jqXHR, data, status){
        display_error(data.statusText)
      })
      .on('ajax:beforeSend',show_loader)
      .on('ajax:complete',hide_loader);

  }());
}); # Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
