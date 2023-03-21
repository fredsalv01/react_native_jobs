import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageUrl } from "../../../../utils";

import styles from "./nearbyjobcard.style";

class NearbyJobCard extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.handleNavigate}
      >
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              uri: checkImageUrl(this.props.job.employer_logo)
                ? this.props.job.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {this.props.job.job_title}
          </Text>
          <Text style={styles.jobType}>
            {this.props.job.job_employment_type}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NearbyJobCard;
