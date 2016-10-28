/*! object_cache, https://github.com/logentries/object_cache */
/**
 * Simple in-memory object cache
 *
 * Version 0.3.2
 * Copyright 2011 Viliam Holub
 *
 * Shared under the Creative Commons Attribution 3.0 Unported License
 * http://creativecommons.org/licenses/by/3.0/
 *
 */
function ObjectCache(cache_capacity, undefined) {

	/**
	 * Storage object for in-memory caching. Addressed by a key, contains pairs
	 * of a value and a timestamp of the last access.
	 */
	var storage = {};
	/** Desired size of the cache. */
	var capacity = cache_capacity < 2 ? 2 : cache_capacity;
	/** Actual size of the cache. */
	var size = 0;

	/**
	 * Inserts the object into the cache.
	 *
	 * @param key
	 *            key to the object
	 * @param value
	 *            value to store under the key given
	 * @return value
	 */
	this.put = function(key, value) {
		// Convert the key to string
		var cache_key = make_key(key);
		// Update cache size
		size += storage[cache_key] ? 0 : 1;
		// Insert the value with last access and creation timestamp
		var now = +new Date();
		storage[cache_key] = [ value, now, now ];

		// Check the cache size
		check_size();

		return value;
	};

	/**
	 * Returns the object requested or null if not found.
	 *
	 * @param key
	 *            key to the object
	 * @param age
	 *            maximal age of the object, optional
	 * @return object found or null
	 */
	this.get = function(key, age) {
		// Convert the key to string
		var cache_key = make_key(key);
		// Find the element
		var record = storage[cache_key];
		// Return null if not found
		if (record === undefined)
			return null; // Object not found
		var now = +new Date();
		// Check the age of the object
		if (age && record[2] < now - age)
			return null; // Object is too old
		// Update the access timestamp
		record[1] = now;

		// Return the value
		return record[0];
	};

	/**
	 * Converts the key given into a key used in the cache. We use JSON
	 * conversion for objects.
	 *
	 * @param key
	 *            key to convert
	 * @returns converted key
	 */
	function make_key(key) {
		return JSON.stringify(key);
	}

	/**
	 * Checks the cache size. If is it larger that desired value, remove the
	 * oldest elements.
	 *
	 */
	function check_size() {
		if (size > capacity) {
			var tosort = [];
			for ( var key in storage)
				tosort.push([ key, storage[key] ]);
			tosort.sort(function(a, b) {
				return a[1][1] - b[1][1];
			});
			// Delete half of the capacity
			for (var i = 0; i < capacity / 2; i++)
				delete storage[tosort[i][0]];
			size -= capacity / 2;
		}
	}
};
