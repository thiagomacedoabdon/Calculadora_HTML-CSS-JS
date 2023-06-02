let result = document.getElementById('result');

    function appendValue(value) {
      result.value += value;
    }

    function appendOperator(operator) {
      result.value += operator;
    }

    function calculate() {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = 'Error';
      }
    }

    function clearResult() {
      result.value = '';
    }