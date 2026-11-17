(function(){
  var CALENDLY_URL = 'https://calendly.com/cartwheel/intro-call';
  var DEMO_URL = 'https://trycartwheel.com/demo/';
  var WHO_LABELS = ['Restaurant operator','Courier company','Enquire about partnership','Driver'];

  function toggle(el, show){ if(el) el.hidden = !show; }

  function clearError(form, fdd, key){
    var errEl = form.querySelector('[data-err="'+key+'"]');
    if(errEl) errEl.hidden = true;
    if(key === 'who') fdd.classList.remove('is-invalid');
    var grp = form.querySelector('[data-grp="'+key+'"]');
    if(grp){
      var og = grp.querySelector('.df-optgrp');
      if(og) og.classList.remove('is-invalid');
    }
    var inputEl = form.querySelector('[name="'+key+'"]');
    if(inputEl && inputEl.classList && inputEl.tagName === 'INPUT' && inputEl.type !== 'radio' && inputEl.type !== 'checkbox'){
      inputEl.classList.remove('is-invalid');
    }
  }

  function showError(form, fdd, key, msg){
    var errEl = form.querySelector('[data-err="'+key+'"]');
    if(errEl){ errEl.hidden = false; errEl.querySelector('span').textContent = msg; }
    if(key === 'who') fdd.classList.add('is-invalid');
    var grp = form.querySelector('[data-grp="'+key+'"]');
    if(grp){
      var og = grp.querySelector('.df-optgrp');
      if(og) og.classList.add('is-invalid');
    }
    var inputEl = form.querySelector('[name="'+key+'"]');
    if(inputEl && inputEl.classList && inputEl.tagName === 'INPUT' && inputEl.type !== 'radio' && inputEl.type !== 'checkbox'){
      inputEl.classList.add('is-invalid');
    }
  }

  function initDemoForm(form){
    var state = { who: null, mkt: null, loc: null, drv: null, vol: null };

    var fdd = form.querySelector('[data-fdd]');
    var fddBtn = fdd.querySelector('[data-fdd-btn]');
    var fddLabel = fdd.querySelector('[data-fdd-label]');
    var fddItems = Array.prototype.slice.call(fdd.querySelectorAll('[data-who]'));

    var mktGroup = form.querySelector('[data-grp="mkt"]');
    var locGroup = form.querySelector('[data-grp="loc"]');
    var drvGroup = form.querySelector('[data-grp="drv"]');
    var volGroup = form.querySelector('[data-grp="vol"]');
    var driverNote = form.querySelector('[data-grp="driver-note"]');
    var contactGroup = form.querySelector('[data-grp="contact"]');

    var nameInput = form.querySelector('[name="name"]');
    var emailInput = form.querySelector('[name="email"]');
    var phoneInput = form.querySelector('[name="phone"]');

    var fieldsEl = form.querySelector('[data-df-fields]');
    var successEl = form.querySelector('[data-df-success]');
    var msgEl = successEl ? successEl.querySelector('[data-df-msg]') : null;
    var linkEl = successEl ? successEl.querySelector('[data-df-link]') : null;

    function setOpen(open){ fdd.classList.toggle('is-open', open); }

    fddBtn.addEventListener('click', function(e){
      e.stopPropagation();
      setOpen(!fdd.classList.contains('is-open'));
    });
    document.addEventListener('click', function(e){
      if(!fdd.contains(e.target)) setOpen(false);
    });

    fddItems.forEach(function(item){
      item.addEventListener('click', function(){
        state.who = parseInt(item.getAttribute('data-who'), 10);
        fddLabel.textContent = WHO_LABELS[state.who];
        fddItems.forEach(function(it){ it.classList.toggle('is-sel', it === item); });
        setOpen(false);
        state.mkt = null; state.loc = null; state.drv = null; state.vol = null;
        Array.prototype.forEach.call(form.querySelectorAll('input[name="mkt"],input[name="loc"],input[name="drv"],input[name="vol"]'), function(r){ r.checked = false; });
        clearError(form, fdd, 'who'); clearError(form, fdd, 'mkt'); clearError(form, fdd, 'loc'); clearError(form, fdd, 'drv'); clearError(form, fdd, 'vol');
        render();
      });
    });

    Array.prototype.forEach.call(form.querySelectorAll('input[name="mkt"]'), function(r){
      r.addEventListener('change', function(){
        state.mkt = parseInt(r.value, 10);
        state.loc = null; state.drv = null;
        Array.prototype.forEach.call(form.querySelectorAll('input[name="loc"],input[name="drv"]'), function(x){ x.checked = false; });
        clearError(form, fdd, 'mkt'); clearError(form, fdd, 'loc'); clearError(form, fdd, 'drv');
        render();
      });
    });
    Array.prototype.forEach.call(form.querySelectorAll('input[name="loc"]'), function(r){
      r.addEventListener('change', function(){
        state.loc = parseInt(r.value, 10);
        state.drv = null;
        Array.prototype.forEach.call(form.querySelectorAll('input[name="drv"]'), function(x){ x.checked = false; });
        clearError(form, fdd, 'loc'); clearError(form, fdd, 'drv');
        render();
      });
    });
    Array.prototype.forEach.call(form.querySelectorAll('input[name="drv"]'), function(r){
      r.addEventListener('change', function(){
        state.drv = parseInt(r.value, 10);
        clearError(form, fdd, 'drv');
      });
    });
    Array.prototype.forEach.call(form.querySelectorAll('input[name="vol"]'), function(r){
      r.addEventListener('change', function(){
        state.vol = parseInt(r.value, 10);
        clearError(form, fdd, 'vol');
      });
    });
    [nameInput, emailInput, phoneInput].forEach(function(input){
      if(!input) return;
      input.addEventListener('input', function(){ clearError(form, fdd, input.name); });
    });

    function render(){
      var isRest = state.who === 0;
      var isCourier = state.who === 1;
      var isDriver = state.who === 3;
      toggle(mktGroup, isRest);
      toggle(locGroup, isRest && state.mkt === 1);
      toggle(drvGroup, isRest && state.mkt === 1 && state.loc === 0);
      toggle(volGroup, isCourier);
      toggle(driverNote, isDriver);
      toggle(contactGroup, !isDriver);
    }

    function redirectUrl(){
      if(state.who !== 0 || state.mkt !== 1 || state.loc !== 0) return '';
      if(state.drv === 0) return CALENDLY_URL;
      if(state.drv === 1) return DEMO_URL;
      return '';
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(state.who === 3) return;

      var errors = {};
      if(state.who === null) errors.who = 'Pick the option that describes you so we can route your request.';
      if(state.who === 0 && state.mkt === null) errors.mkt = 'Select where your restaurants operate.';
      if(state.who === 0 && state.mkt === 1 && state.loc === null) errors.loc = 'Select how many locations you run.';
      if(state.who === 0 && state.mkt === 1 && state.loc === 0 && state.drv === null) errors.drv = 'Select whether you have in-house drivers.';
      if(state.who === 1 && state.vol === null) errors.vol = 'Select your monthly order volume.';

      var name = nameInput.value.trim();
      var email = emailInput.value.trim();
      var phone = phoneInput.value.trim();
      if(!name) errors.name = 'Enter your full name.';
      else if(name.length < 2) errors.name = 'Enter your full name, at least 2 characters.';
      if(!email) errors.email = 'Enter your work email.';
      else if(!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email)) errors.email = 'That email is not valid. Use a format like name@company.com.';
      if(!phone) errors.phone = 'Enter a phone number we can reach you on.';
      else if(phone.replace(/[^0-9]/g,'').length < 7) errors.phone = 'That phone number looks too short. Include the area code.';

      var keys = Object.keys(errors);
      if(keys.length){
        keys.forEach(function(k){ showError(form, fdd, k, errors[k]); });
        var firstField = ['name','email','phone'].filter(function(k){ return errors[k]; })[0];
        if(firstField){
          var el = form.querySelector('[name="'+firstField+'"]');
          if(el) el.focus({preventScroll:true});
        }
        return;
      }

      if(fieldsEl) fieldsEl.hidden = true;
      if(successEl) successEl.hidden = false;
      var go = redirectUrl();
      if(go){
        if(msgEl) msgEl.textContent = 'Redirecting you now. If nothing happens, use the link below.';
        if(linkEl){ linkEl.hidden = false; linkEl.href = go; }
        window.location.href = go;
      } else {
        if(msgEl) msgEl.textContent = 'A Cartwheel expert will reach out within one business day.';
        if(linkEl) linkEl.hidden = true;
      }
    });

    render();
  }

  Array.prototype.forEach.call(document.querySelectorAll('.demo-form'), initDemoForm);
})();
