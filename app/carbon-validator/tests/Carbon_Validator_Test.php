<?php
require_once(dirname(dirname(__FILE__)) . '/load.php');

class Carbon_Validator_Test extends PHPUnit_Framework_TestCase {

	function testValidatorFailsWithInvalidData() {
		$validator = new Carbon_Validator(array(
			"name" => "",
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->fails());
		$errors = $validator->get_errors();

		$this->assertEquals(
			1,
			count($errors)
		);
	}

	function testValidatorPassesWithValidData() {
		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->passes());
	}

	function testCustomMessages() {
		$validator = new Carbon_Validator(array(
			"name" => "",
		), array(
			"name" => "required"
		), array(
			"name.required" => "Custom Message"
		));

		$this->assertTrue($validator->fails());
		$errors = $validator->get_errors();

		$this->assertEquals(
			"Custom Message",
			$errors['name']
		);
	}

	function testCustomValidationRule() {
		Carbon_Validator::extend('custom_rule', function ($value) {
			return true;
		});

		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
		), array(
			"name" => "custom_rule"
		));

		$this->assertTrue($validator->passes());
		Carbon_Validator::unextend('custom_rule');

		Carbon_Validator::extend('custom_rule', function ($value) {
			return false;
		});
		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
		), array(
			"name" => "custom_rule"
		));

		$this->assertTrue($validator->fails());

		Carbon_Validator::unextend('custom_rule');
	}

	function testCustomValidationRuleException() {
		Carbon_Validator::extend('custom_rule', function ($value) {
			throw new Carbon_Validator_ValidationError("This is an error. ");
		});

		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
		), array(
			"name" => "custom_rule"
		));

		$this->assertTrue($validator->fails());
		Carbon_Validator::unextend('custom_rule');
	}

	function testMultipleRulesAreParsed() {
		$validator = new Carbon_Validator(array(
			"email" => "nobody[at]example.com",
		), array(
			"email" => "required|email"
		));

		$this->assertTrue($validator->fails());
	}

	function testMultipleFieldsAreValidated() {
		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
			"email" => "Invalid email",
		), array(
			"name" => "required",
			"email" => "required|email"
		));

		$this->assertTrue($validator->fails());

		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
			"email" => "nobody@example.com",
		), array(
			"name" => "required",
			"email" => "required|email"
		));

		$this->assertTrue($validator->passes());
	}

	function testRequired() {
		$validator = new Carbon_Validator(array(
			"name" => "",
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->fails());
		// -------------------------
		$validator = new Carbon_Validator(array(
			"name" => "John Doe",
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->passes());
		// -------------------------
		$validator = new Carbon_Validator(array(
			// Don't pass name intetionally
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->fails());
		// --------------------------	
		$validator = new Carbon_Validator(array(
			"name" => array(),
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->fails());
		// --------------------------	
		$validator = new Carbon_Validator(array(
			"name" => array("something"),
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->passes());
		// --------------------------	
		$validator = new Carbon_Validator(array(
			"name" => array("John", "Doe"),
		), array(
			"name" => "required"
		));

		$this->assertTrue($validator->passes());
		// --------------------------
		$validator = new Carbon_Validator(array(
			"price_discount" => 0,
		), array(
			"price_discount" => "required"
		));

		$this->assertTrue($validator->passes());

		// --------------------------
		$validator = new Carbon_Validator(array(
			"price_discount" => '0',
		), array(
			"price_discount" => "required"
		));

		$this->assertTrue($validator->passes());

		// --------------------------
		$file = $this->getMockBuilder('Carbon_FileUpload')
			->disableOriginalConstructor()
			->getMock();

		$file->method('is_uploaded')
			->willReturn(false);

		$file->method('get_mime_type')
			->willReturn('image/jpeg');

		$validator = new Carbon_Validator(array(
			'file' => $file,
		), array(
			'file' => 'required',
		));

		$this->assertTrue($validator->fails(), 'Required rule should fail when testing a file which has failed to upload');

		// --------------------------
		$file = $this->getMockBuilder('Carbon_FileUpload')
			->disableOriginalConstructor()
			->getMock();

		$file->method('is_uploaded')
			->willReturn(true);

		$file->method('get_mime_type')
			->willReturn('image/jpeg');

		$validator = new Carbon_Validator(array(
			'file' => $file,
		), array(
			'file' => 'required',
		));

		$this->assertTrue($validator->passes(), 'Required rule should pass when testing an uploaded file');
	}

	function testRegex() {
		$validator = new Carbon_Validator(array(
			'vat_number' => "BG200659554"
		), array(
			"vat_number" => array("required", 'regex:/^BG\d{9}$/')
		));

		$this->assertTrue($validator->passes());

		$validator = new Carbon_Validator(array(
			'vat_number' => "Invalid VAT"
		), array(
			"vat_number" => array("required", 'regex:/^BG\d{9}$/')
		));

		$this->assertTrue($validator->fails());
	}

	function testRegexWithComma() {
		$validator = new Carbon_Validator(array(
			'price' => "134,512,2344.12"
		), array(
			"price" => array("required", 'regex:/^[0-9,.]+$/')
		));

		$this->assertTrue($validator->passes());
	}

	function testStringMinAndMaxLength() {
		$validator = new Carbon_Validator(array(
			'name' => "S"
		), array(
			"name" => "string_min_length:2|string_max_length:10"
		));

		$this->assertTrue($validator->fails());

		$validator = new Carbon_Validator(array(
			'name' => "John"
		), array(
			"name" => "string_min_length:2|string_max_length:10"
		));

		$this->assertTrue($validator->passes());

		$validator = new Carbon_Validator(array(
			'name' => "John Doe too long name"
		), array(
			"name" => "string_min_length:2|string_max_length:10"
		));

		$this->assertTrue($validator->fails());

		$validator = new Carbon_Validator(array(
			// Cyrillic character ...
			'name' => "Я"
		), array(
			"name" => "string_min_length:2|string_max_length:10"
		));

		$this->assertTrue($validator->fails());

		$validator = new Carbon_Validator(array(
			'name' => "Идеал Петров"
		), array(
			"name" => "string_min_length:2|string_max_length:12"
		));

		$this->assertTrue($validator->passes());

		$validator = new Carbon_Validator(array(
			'name' => "Идеал Петров тест"
		), array(
			"name" => "string_min_length:2|string_max_length:12"
		));

		$this->assertTrue($validator->fails());
	}

	function testNumericMinAndMax() {
		$validator = new Carbon_Validator(array(
			'price' => "0"
		), array(
			"price" => "numeric_min:1|numeric_max:12"
		));

		$this->assertTrue($validator->fails());

		$validator = new Carbon_Validator(array(
			'price' => "5"
		), array(
			"price" => "numeric_min:1|numeric_max:12"
		));

		$this->assertTrue($validator->passes());

		$validator = new Carbon_Validator(array(
			'price' => "16"
		), array(
			"price" => "numeric_min:1|numeric_max:12"
		));

		$this->assertTrue($validator->fails());
	}

	function testFileTypeValidation() {
		$validator = new Carbon_Validator(array(
			// Intentionally left blank
		), array(
			'file' => 'file:jpg'
		));

		$this->assertTrue($validator->passes(), 'File rule shoud not fail when no file is uploaded.');
		
		/* ................ */

		$file = $this->getMockBuilder('Carbon_FileUpload')
			->disableOriginalConstructor()
			->getMock();

		$file->method('is_uploaded')
			->willReturn(true);

		$file->method('get_mime_type')
			->willReturn('image/jpeg');

		$validator = new Carbon_Validator(array(
			'file' => $file
		), array(
			'file' => 'file:jpg'
		));

		$this->assertTrue($validator->passes());

		/* ................ */

		$file = $this->getMockBuilder('Carbon_FileUpload')
			->disableOriginalConstructor()
			->getMock();

		$file->method('is_uploaded')
			->willReturn(true);

		$file->method('get_mime_type')
			->willReturn('application/pdf');

		$validator = new Carbon_Validator(array(
			'file' => $file
		), array(
			'file' => 'file:jpg'
		));

		$this->assertTrue($validator->fails());
	}

	function testFileSize() {
		$validator = new Carbon_Validator(array(
			// Intentionally left blank
		), array(
			'file' => 'filesize:1M'
		));

		$this->assertTrue($validator->passes(), 'Filesize rule shoud not fail when no file is uploaded.');

		/* ................ */

		$file = $this->getMockBuilder('Carbon_FileUpload')
			->disableOriginalConstructor()
			->getMock();

		$file->method('is_uploaded')
			->willReturn(true);

		$file->method('get_size')
			->willReturn(1572864); // 1.5 MB

		// 1.5 MB file should fail when the limit is 1MB
		$validator = new Carbon_Validator(array(
			'file' => $file
		), array(
			'file' => 'filesize:1M'
		));

		$this->assertTrue($validator->fails());

		// 1.5 MB file should pass when the limit is 2MB
		$validator = new Carbon_Validator(array(
			'file' => $file
		), array(
			'file' => 'filesize:2M'
		));

		$this->assertTrue($validator->passes());

		// 1.5 MB file should fail when the limit is 1000K
		$validator = new Carbon_Validator(array(
			'file' => $file
		), array(
			'file' => 'filesize:1000K'
		));

		$this->assertTrue($validator->fails());
	}

	function testArrayParsing() {
		$input = array(
			'user' => array(
				'first_name' => 'John',
				'last_name' => 'Doe',
				'email' => 'johndoe@example.com',
				'address' => array(
					'street' => array(
						'number' => "123"
					)
				)
			)
		);

		$validator = new Carbon_Validator($input, array(
			'user[first_name]' => 'required',
			'user[last_name]' => 'required|string_min_length:2',
			'user[email]' => 'email',
			'user[address][street][number]' => 'required',
		));

		$this->assertTrue($validator->passes());

		$validator = new Carbon_Validator(array(
			"user" => array(
				"address" => "Doe"
			)
		), array(
			// Try to validate a missing field ... 
			'user[name]' => 'required',
		));
		$this->assertTrue($validator->fails());
	}

	function testDefaultErrorMessage() {
		$validation_rule = 'required';
		$custom_default_error_message = 'custom_default_error_message';
		$resulting_errors_array = ['name'=>$custom_default_error_message];

		Carbon_Validator::register_default_error_message($validation_rule, $custom_default_error_message);
		$validator = new Carbon_Validator(array(
			
		), array(
			"name" => $validation_rule,
		));

		$this->assertTrue(!$validator->passes());

		$this->assertEquals(
			$resulting_errors_array,
			$validator->get_errors()
		);

		Carbon_Validator::unregister_default_error_message($validation_rule);
		$validator = new Carbon_Validator(array(
			
		), array(
			"name" => $validation_rule,
		));

		$this->assertTrue(!$validator->passes());

		$this->assertTrue( $resulting_errors_array != $validator->get_errors() );
	}

	function testLoadPackage() {
		// skipped testing if load_package loads correct packages as all validation tests will fail due to missing rules

		$this->expectException( Carbon_Validator_Exception::class );
		$package = 'test_non_existant_package';
		Carbon_Validator::load_package( $package );
	}

}