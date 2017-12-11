require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  test "should get 1st" do
    get games_1st_url
    assert_response :success
  end

  test "should get 2nd" do
    get games_2nd_url
    assert_response :success
  end

  test "should get 3rd" do
    get games_3rd_url
    assert_response :success
  end

  test "should get 4th" do
    get games_4th_url
    assert_response :success
  end

end
