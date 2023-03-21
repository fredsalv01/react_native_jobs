import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageUrl } from "../../../../utils";
class PopularJobCard extends PureComponent  {
  render () {
    return (
      <TouchableOpacity
        style={styles.container(this.props.selectedJob, this.props.item)}
        onPress={() => this.props.handleCardPress(this.props.item)}
      >
        <TouchableOpacity style={styles.logoContainer(this.props.selectedJob, this.props.item)}>
          <Image
            source={{
              uri: checkImageUrl(this.props.item.employer_logo)
                ? this.props.item.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>
          {this.props.item.employer_name}
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.jobName(this.props.selectedJob, this.props.item)} numberOfLines={1}>
            {this.props.item.job_title}
          </Text>
          <Text style={styles.location}> {this.props.item.job_country}</Text>
          {/* <View style={styles.infoWrapper}>
            <Text style={styles.publisher(selectedJob, item)}>
              {item?.job_publisher || "none"} -
            </Text>
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };
};

export default PopularJobCard;
