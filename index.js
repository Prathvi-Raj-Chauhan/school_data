const express = require("express")
const mysql = require("mysql2/promise")
require("dotenv").config()

const db = require('./services/dbconnect')

